import React from 'react'
import { Text as TextImpl } from '@react-three/drei'

export default function Text({ bold = false, anchorX = 'left', anchorY = 'top', textAlign = 'left', ...props }) {
  
  return <TextImpl anchorX={anchorX} anchorY={anchorY} textAlign={textAlign} {...props} />
}