import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing/index'
import Meal from '../pages/Meal/index'
import PersonalizedMeals from '../pages/PersonalizedMeals/index'
import Profile from '../pages/Profile/index'

import Integrated from '../components/Integrated/index'

// for the mean time the / path directs to Landing page. It will be changed in the future to cater
// users based on their authorization

export default () => {
	return (
		<div>
			<BrowserRouter>
				<Integrated>
					<Switch>
						<Route exact path='/' component={Landing}/>
						<Route exact path='/landing' component={Landing}/>
						<Route exact path='/set' component={PersonalizedMeals}/>
						<Route exact path='/users/:userID' component={Profile}/>
						<Route exact path='/meals/:mealID' component={Meal}/>
						<Route component={Landing}/>
					</Switch>
				</Integrated>
			</BrowserRouter>
		</div>
	)
}