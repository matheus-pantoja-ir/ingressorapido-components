import React    from 'react'
import {action} from '@storybook/addon-actions'
import Input    from './input'

export default {
	title    : 'Input',
	component: Input,
}

export const TextInput = () => (
	<Input type="text"
		   placeholder="Usuário ou E-mail"
		   onChange={action(`onChange`)}>
	</Input>
)

export const NumberInput = () => (
	<Input type="number"
		   placeholder="0"
		   onChange={action(`onChange`)}>
	</Input>
)
