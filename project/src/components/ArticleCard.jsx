import './ArticleCard.scss'
import { useRef, useState } from 'react'

export default function ArticleCard({ article, action = "bookmark", onRemove }) {
  const articleRef = useRef()
  const [startX, setStartX] = useState(0)
  const [isSwiped, setIsSwiped] = useState(false)
  const touchMoved = useRef(false)

  //  Touch events 
  function handleTouchStart(event) {
    setStartX(event.touches[0].clientX)
    touchMoved.current = false
  }

  function handleTouchEnd(event) {
    const endX = event.changedTouches[0].clientX
    const diff = startX - endX

    if (isSwiped && diff < -30) {
      touchMoved.current = true
      setIsSwiped(false)
      articleRef.current.style.transform = 'translateX(0)'
    } else if (!isSwiped && diff > 50) {
      touchMoved.current = true
      setIsSwiped(true)
      articleRef.current.style.transform = 'translateX(-70px)'
    }
  }

  //  Mouse click
  function handleClick() {
    // No swipe action for "none" mode
    if (action === "none") return
    // Ignore click if it was triggered by a touch swipe
    if (touchMoved.current) {
      touchMoved.current = false
      return
    }
    if (!isSwiped) {
      setIsSwiped(true)
      articleRef.current.style.transform = 'translateX(-70px)'
    } else {
      setIsSwiped(false)
      articleRef.current.style.transform = 'translateX(0)'
    }
  }

  // Bookmark / delete button
  function handleAction() {
    if (action === "bookmark") {
      const archive = JSON.parse(localStorage.getItem("archive") || "[]")
      const alreadySaved = archive.some((a) => a.url === article.url)
      if (!alreadySaved) {
        archive.push(article)
        localStorage.setItem("archive", JSON.stringify(archive))
      }
      setIsSwiped(false)
      articleRef.current.style.transform = 'translateX(0)'
    } else if (action === "delete") {
      if (onRemove) {
        onRemove(article)
      }
    }
  }

  return (
    <div className="articleCard__wrapper">
      {action !== "none" && (
      <button
        className={`articleCard__action articleCard__action--${action}`}
        onClick={handleAction}
      >
        {action === "bookmark" ? (
          <svg viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
          </svg>
        )}
      </button>

      )}
      <article
        ref={articleRef}
        className="articleCard"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        {article.multimedia?.length > 0 && (
          <img src={article.multimedia[0].url} alt="" />
        )}
        <div>
          <h2 className="articleCard__heading">{article.title}</h2>
          <p className="articleCard__abstract">{article.abstract}</p>
        </div>
      </article>
    </div>
  )
}
