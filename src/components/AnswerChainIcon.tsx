interface AnswerChainIconProps {
  className?: string
}

function AnswerChainIcon({ className = "w-6 h-6" }: AnswerChainIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chain link representing blockchain/verification */}
      <path 
        d="M8 6a2 2 0 1 1 4 0v1h2V6a4 4 0 1 0-8 0v1h2V6z" 
        opacity="0.7"
      />
      <path 
        d="M6 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-2H6v-2h2V9H6zm10 0v2h2v2h-2v2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2z"
        opacity="0.9"
      />
      {/* Question mark in the center */}
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2"/>
      <path 
        d="M12 8.5a1.5 1.5 0 0 0-1.5 1.5h-1a2.5 2.5 0 0 1 5 0c0 .87-.5 1.43-1 1.75-.5.32-1 .5-1 1.25h-1c0-1.12.5-1.68 1-2 .5-.32 1-.68 1-1.5A1.5 1.5 0 0 0 12 8.5z"
      />
      <circle cx="12" cy="16" r="0.5"/>
      {/* Academic cap element */}
      <path 
        d="M2 18l10-4 10 4-10 4-10-4z" 
        opacity="0.3"
        transform="scale(0.6) translate(6, 2)"
      />
    </svg>
  )
}

export default AnswerChainIcon
