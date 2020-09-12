import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding-top: 40px;
	align-items: center;
	background-color: #9bd7d1ff;
`

export const FormTitle = styled.h2`
	font-family: Helvetica;
	font-weight: bolder;
`

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid silver;
	border-radius: 5px;
	background-color: white;
	padding: 20px;
	box-shadow: 2px 2px 2px 2px gray;
`

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px auto;
`

export const Label = styled.label`
	font-family: Arial;
	font-size: 16px;
	font-weight: bold;
	margin: 3px auto 3px 0;
`

export const Input = styled.input`
	font-family: Courier New;
	font-size: 14px;
	padding: 2px;
	border: 1px solid silver;
	border-radius: 5px;
	margin: 3px 0;
`

export const ActionContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 10px auto;
`

export const Button = styled.button`
	${(props)=>props.primary ? `background-color: orange; color: white; border: none;` : `background-color: white; color: black; border: 1px solid black;`}
	padding: 5px;
	border-radius: 5px;
	margin: 0 5px;
	cursor: pointer;
`

export const UtilsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px auto;	
`

export const RedirectLink = styled(Link)`
	color: ${(props)=>props.color};
	font-size: 14px;
	font-family: Monospace;
	font-weight: bold;
`

export const ErrorContainer = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 10px auto;
`

export const ErrorItem = styled.li`
	color: red;
	font-size: 12px;
	font-family: Helvetica;
	font-weight: bold;
`