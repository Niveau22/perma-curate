import React from 'react'
import styled, { css } from 'styled-components'
import { landscapeStyle } from 'styles/landscapeStyle'
import { useToggle } from 'react-use'
import AddEntryModal from '../AddEntryModal'

// previous purple color, swapped to signal its in construction
// background-color: #883ae1;
const StyledButton = styled.button`
  background-color: gray;
  border-radius: 12px;
  font-size: 22px;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
  padding: 14px 20px;
  border: none;
  font-weight: 700;
  cursor: not-allowed;
  width: 100%;
    ${landscapeStyle(
      () => css`
        width: auto;
      `
    )};
`

const SubmitButton: React.FC = () => {
  //const [isAddEntryModalOpen, toggleAddEntryModal] = useToggle(false)
  // TODO
  return (
    <>
      {' '}
      <StyledButton onClick={() => {}}>Submit entry 🚧</StyledButton>
      {/* {isAddEntryModalOpen && (
        <AddEntryModal toggleAddEntryModal={toggleAddEntryModal} />
      )} */}
    </>
  )
}
export default SubmitButton
