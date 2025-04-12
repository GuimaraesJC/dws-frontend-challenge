import { useState } from 'react'

import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoIosClose } from 'react-icons/io'

import { Author, Category } from '../../types'
import styles from './Dropdown.module.css'

interface DropdownProps {
  label: string
  options: Author[] | Category[]
  onSelectFn: (option: Author | Category) => void
  onClearFn: () => void
  selectedOptions?: (Author | Category)[]
}

function Dropdown({ label, options, onSelectFn, onClearFn, selectedOptions }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleShowSelectedOptions = (selectedOptions: (Author | Category)[]) => {
    const selected = selectedOptions.map(option => option.name).join(', ')

    return selected.length > 10 ? selected.slice(0, 10) + '...' : selected
  }

  return (
    <div className={styles.container}>
      <button className={styles.dropdownButton} onClick={() => setIsOpen((prev) => !prev)}>
        {selectedOptions?.length ? handleShowSelectedOptions(selectedOptions) : label}

        {selectedOptions?.length ? (
          <IoIosClose className={styles.icon} onClick={(e) => {
            e.stopPropagation()
            onClearFn()
            setIsOpen(false)
          }} />
        ) : (
          <RiArrowDropDownLine className={`${styles.icon} ${isOpen ? styles.isOpen : ''}`} />
        )}
      </button>

      {isOpen && (
        <ul className={styles.optionsContainer}>
          {options.map((option) => (
            <li
              key={option.id}
              className={`${styles.option} ${selectedOptions?.includes(option) ? styles.optionSelected : ''}`}
              onClick={() => onSelectFn(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown