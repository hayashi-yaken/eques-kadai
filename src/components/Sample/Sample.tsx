import React, { FC } from 'react'

type SampleProps = {
  children?: React.ReactNode
}

export const Sample: FC<SampleProps> = ({ children }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}
