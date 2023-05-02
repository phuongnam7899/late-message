import './index.scss'

export const FlipCard = ({children, customStyle}) => {
    return <div className="flip-card" style={customStyle}>
        <div className="flip-card-inner">
            {children}
        </div>
    </div>
}

export const FlipCardFront = ({children}) => {
    return <div className="flip-card-front">
              {children}
    </div>
}

export const FlipCardBack = ({children}) => {
    return <div className="flip-card-back">
              {children}
    </div>
}