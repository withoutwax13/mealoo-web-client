import React, { useState } from 'react'

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

const Signup = () => {

	let [ username, setUsername ] = useState('')
	let [ password, setPassword ] = useState('')
	let [ rePassword, setRePassword ] = useState('')
	let [ error, setError ] = useState([])

	const handleFormSubmit = e => {
		e.preventDefault()
	}

	const onSubmitButtonClick = () => {
		
		if(!(username && password && rePassword)){ setError(error.concat(["Incomplete field values."])) }
		else if (password !== rePassword){ setError(error.concat(['Password fields do not match.'])) }
		else{
			setError([])
		}
	}

	const clearErrorOnFocus = () => {
		setError([])
	}

	const onCancelButtonClick = () => {
		setUsername('')
		setPassword('')
		setRePassword('')
		setError([])
	}

	return (
		<PageContainer>
			<FormContainer onSubmit={handleFormSubmit}>
				<FormTitle>Signup</FormTitle>
				<FormItem>
					<Label htmlFor='username'>Username</Label>
					<Input 
						id='username' 
						type='text' 
						placeholder='Username' 
						onChange={e=>{setUsername(e.target.value); clearErrorOnFocus();}} 
						value={username}/>
				</FormItem>
				<FormItem>
					<Label htmlFor='password'>Password</Label>
					<Input 
						id='password' 
						type='password' 
						placeholder='Password' 
						onChange={e=>{setPassword(e.target.value); clearErrorOnFocus();}} 
						value={password}/>
				</FormItem>
				<FormItem>
					<Label htmlFor='re-password'>Re-type Password</Label>
					<Input 
						id='re-password' 
						type='password' 
						placeholder='Re-type password' 
						onChange={e=>{setRePassword(e.target.value); clearErrorOnFocus();}} 
						value={rePassword}/>
				</FormItem>
				<ActionContainer>
					<Button 
						primary 
						onClick={onSubmitButtonClick}>
							Create
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
					<h4>Already have an account?</h4>
					<RedirectLink 
						to='/login' 
						color='red'>
							Login.
					</RedirectLink>
				</UtilsContainer>
			</FormContainer>
		</PageContainer>
	)
}

export default Signup