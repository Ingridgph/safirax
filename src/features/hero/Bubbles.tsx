import styles from './Hero.module.css'

export function Bubbles() {
  return (
    <div className={styles.blobs} aria-hidden="true">
      <span className={`${styles.blob} ${styles.blob1}`} />
      <span className={`${styles.blob} ${styles.blob2}`} />
      <span className={`${styles.blob} ${styles.blob3}`} />
      <span className={`${styles.blob} ${styles.blob4}`} />
      <span className={`${styles.blob} ${styles.blob5}`} />
      <span className={`${styles.blob} ${styles.blob6}`} />
    </div>
  )
}