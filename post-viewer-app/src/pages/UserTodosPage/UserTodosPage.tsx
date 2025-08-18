import { useParams } from 'react-router-dom';
import { useUserToDo } from '../UserTodosPage/model/hooks/useUserTodos';
import styles from './UserTodosPage.module.css';

export const UserTodosPage = () => {
  const { id } = useParams();
  const { todos, isLoading, error } = useUserToDo(id!);
  

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Todos</h2>
      <ul className={styles.todosList}>
        {todos.map(todo => (
          <li key={todo.id}
          className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              readOnly
              className={styles.checkbox}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};