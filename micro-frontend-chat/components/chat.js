
import Image from 'next/image'
import styles from '../styles/Chat.module.css'

const Icon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z" fill="#003F2D" />
</svg>);
const Send = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.67124 20.4L21.1212 12.92C21.9312 12.57 21.9312 11.43 21.1212 11.08L3.67124 3.60002C3.01124 3.31002 2.28124 3.80002 2.28124 4.51002L2.27124 9.12002C2.27124 9.62002 2.64124 10.05 3.14124 10.11L17.2712 12L3.14124 13.88C2.64124 13.95 2.27124 14.38 2.27124 14.88L2.28124 19.49C2.28124 20.2 3.01124 20.69 3.67124 20.4Z" fill="white" />
</svg>);
const TextFormat = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18C19 17.45 18.55 17 18 17H6C5.45 17 5 17.45 5 18ZM9.5 12.8H14.5L15.16 14.4C15.31 14.76 15.66 15 16.05 15C16.74 15 17.2 14.29 16.93 13.66L13.05 4.69C12.87 4.27 12.46 4 12 4C11.54 4 11.13 4.27 10.95 4.69L7.07 13.66C6.8 14.29 7.27 15 7.96 15C8.35 15 8.7 14.76 8.85 14.4L9.5 12.8ZM12 5.98L13.87 11H10.13L12 5.98Z" fill="#003F2D" />
</svg>);

const Chat = () => {
  return (
    <main className={styles.main}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className={styles.container}>
        <div className={`${styles.flex} ${styles.spaceBetween}`}>
          <span>
            AI Chat
          </span>
          <button className={styles.button}>
            <span class="material-symbols-outlined">
              clear_all
            </span>
            <span className={styles.buttonText}>
              Clear
            </span>
          </button>
        </div>
        <div className={styles.dividerBottom}></div>
        <div className={styles.main}>

        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottomDiv}>
          <div className={styles.input}>
            <input className={styles.inputBox} />
          </div>
          <div className={`${styles.flex} ${styles.spaceBetween}`}>
            <div className={styles.flex}>
              <button className={styles.bottomButton}>
                <TextFormat />
              </button>
              <button className={styles.bottomButton}>
                <span class="material-symbols-outlined">
                  attachment
                </span>
              </button>
                <button className={`${styles.bottomButton2} ${styles.flex}`}>
                  <Icon />
                  <span className={styles.buttonTextBot}>
                    Prompts
                  </span>
                </button>
            </div>
            <div>
              <button className={`${styles.bottomButton} ${styles.buttonMain}`}>
                <Send />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Chat
