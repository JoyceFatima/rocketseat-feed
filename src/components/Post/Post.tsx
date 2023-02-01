import { ChangeEvent, InvalidEvent,  FormEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  description: Array<{
    type: string,
    content: string,
  }>;
}

export function Post({ author, publishedAt, description }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'"
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function deleteComment(comment: string) {
    setComments(comments.filter(c => c !== comment));
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {description.map((line) => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
                  <a href='https://github.com/JoyceFatima' target="_blank" >{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            name="comment"
            value={newCommentText}
            placeholder="Deixe um comentário"
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </div>
      </article>
    </div>
  );
}
