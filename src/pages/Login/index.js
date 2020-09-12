import React, { useState } from 'react'
import { connect } from 'react-redux'

import {
	PageContainer,
	FormContainer,
	FormTitle,
	FormItem,
	Label,
	Input,
	ActionContainer,
	Button,
	UtilsContainer,
	RedirectLink,
	ErrorContainer,
	ErrorItem
} from './style'

import { clientLogIn } from '../../modules/actions'
import History from '../../utils/History'

const Login = (props) => {

	const { clientLogIn } = props

	let [ username, setUsername ] = useState('')
	let [ password, setPassword ] = useState('')
	let [ error, setError ] = useState([])

	const handleFormSubmit = e => {
		e.preventDefault()
	}

	const onSubmitButtonClick = () => {
		
		if(!(username && password)){ setError(error.concat(["Incomplete field values."])) }
		else{
			setError([])
			clientLogIn()
			History.push('/set')
		}
	}

	const onCancelButtonClick = () => {
		setUsername('')
		setPassword('')
		setError([])
	}

	return (
		<PageContainer>
			<FormContainer onSubmit={handleFormSubmit}>
				<FormTitle>LOGIN</FormTitle>
				<FormItem>
					<Label htmlFor='username'>Username</Label>
					<Input 
						id='username' 
						type='text' 
						placeholder='Username' 
						onChange={e=>setUsername(e.target.value)} 
						value={username}/>
				</FormItem>
				<FormItem>
					<Label htmlFor='password'>Password</Label>
					<Input 
						id='password' 
						type='password' 
						placeholder='Password' 
						onChange={e=>setPassword(e.target.value)} 
						value={password}/>
				</FormItem>
				<ActionContainer>
					<Button 
						primary 
						onClick={onSubmitButtonClick}>
							Submit
					</Button>
					<Button 
						onClick={onCancelButtonClick}>
							Reset
					</Button>
				</ActionContainer>
				{
					error.length > 0 ? 
					<ErrorContainer>
						{
							Array.from(new Set(error)).map((d, i)=><ErrorItem key={i}>{d}</ErrorItem>)
						}
					</ErrorContainer> : 
					null
				}
				<UtilsContainer>
					<h4>No account yet?</h4>
					<RedirectLink 
						to='/signup' 
						color='red'>
							Create an account.
					</RedirectLink>
				</UtilsContainer>
			</FormContainer>
		</PageContainer>
	)
}

export default connect(null, { clientLogIn })(Login)