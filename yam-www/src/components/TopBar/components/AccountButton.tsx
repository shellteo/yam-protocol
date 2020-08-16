import React, { useMemo } from 'react'
import styled from 'styled-components'

import { useWallet } from 'use-wallet'

import useModal from '../../../hooks/useModal'
import { formatAddress } from '../../../utils'

import Button from '../../Button'

import AccountModal from './AccountModal'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<AccountModal />)
  
  const { account, connect, chainId, networkName } = useWallet()

  return (
    <StyledAccountButton>
      {!account ? (
        <Button
          onClick={() => {
            console.log('injected', chainId, networkName)
            connect('injected')
          }}
          size="sm"
          text="Unlock Wallet"
        />
      ) : (
        <Button
          onClick={onPresentAccountModal}
          size="sm"
          text="My Wallet"
        />
      )}
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div``

export default AccountButton