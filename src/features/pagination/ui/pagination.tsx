import { Button } from '@/shared/ui/Button'
import type { PaginationProps } from '../model/types'
import styles from './pagination.module.css'
import ArrowLeft from "@assets/Arrow_btn_left.svg?react";
import ArrowRight from "@assets/Arrow_btn_right.svg?react";
import { cn } from '@/shared/lib/cn';
import { useSearchParams } from 'react-router';

export function Pagination({totalPages, className}: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  if (totalPages <= 1) return null

  const goToPage = (page: number) => {
      if (page < 1 || page > totalPages) return

      setSearchParams(prev => {
          const next = new URLSearchParams(prev)
          next.set('page', String(page))
          return next
      })
  }

  const getPaginationItems = (current: number, total: number) => {
        if (total < 7) {
            return Array.from({ length: total }, (_, i) => i + 1)
        }

        if (current <= 5) {
            return [1, 2, 3, 4, 5, 6, '...', total];
        }

        if (current >= total - 4) {
            return [1, '...', total - 5, total - 4, total - 3, total - 2, total - 1, total];
        }

        return [1, '...', current - 1, current, current + 1, '...', total];
    }

  const paginationItems = getPaginationItems(currentPage, totalPages);
  
  return (
    <div className={cn(styles.container, className)}>
      <Button
        variant="whiteBgButton"
        size='S'
        type="button"
        className={styles.detailsButton}
        iconRight={<ArrowLeft />}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      />

      {paginationItems.map((item, i) => {
        if (item === '...') {
          return (
            <span key={`dots-${i}`} className={styles.paginationDots}>...</span>
          )
        }
        const page = item as number
        const isSelected = currentPage === page

        return (
            <button
                key={page}
                className={`${styles.paginationButton} ${isSelected && styles.paginationButtonSelected}`}
                onClick={() => goToPage(page)}
                aria-current={isSelected ? 'page' : undefined}
            >
                {page}
            </button>
        )
      })}
      
      <Button
        variant="whiteBgButton"
        size='S'
        type="button"
        className={styles.detailsButton}
        iconRight={<ArrowRight />}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      />
    </div>
  )
}