import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import API from "../../utils/API";

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
  ErrorItem,
  MainContainer,
  SectionContainer,
  InfoContainer,
  InfoItem,
} from "./style";

import History from "../../utils/History";

// 1.  Create an auth and user entity for the backend server

// Auth => /home/sign-up => params: authorization token; signUpRequest => an object of the data below
// {
// 	"email": "string",
// 	"password": "string",
// 	"role": [
// 	"string"
// 	],
// 	"username": "string"
// }

// User => /users/add => params: authorization token from the auth logging; user => object of the data below
// {
// 	"email": "string",
// 	"foodDiaries": [
// 	{
// 		"date": "string",
// 		"id": 0,
// 		"listOfMeals": [
// 		{
// 			"images": [
// 			{
// 				"fileUrl": "string"
// 			}
// 			],
// 			"ingredients": [
// 			{
// 				"amount": 0,
// 				"product": {
// 				"caloriesPer100g": 0,
// 				"name": "string",
// 				"price": 0
// 				}
// 			}
// 			],
// 			"mealDifficulty": "EASY",
// 			"mealMacronutrients": {
// 			"totalCarbohydrates": 0,
// 			"totalFats": 0,
// 			"totalProteins": 0
// 			},
// 			"name": "string",
// 			"price": 0,
// 			"recipe": "string",
// 			"totalCalories": 0
// 		}
// 		],
// 		"mealMacronutrients": {
// 		"totalCarbohydrates": 0,
// 		"totalFats": 0,
// 		"totalProteins": 0
// 		},
// 		"totalCalories": 0,
// 		"totalPrice": 0
// 	}
// 	],
// 	"id": 0,
// 	"mealooUserDetails": {
// 	"age": 0,
// 	"height": 0,
// 	"physicalActivity": "NONE",
// 	"sex": "MALE",
// 	"weight": 0
// 	},
// 	"nutritionSettings": {
// 	"dailyCaloricGoal": 0
// 	},
// 	"password": "string",
// 	"roles": [
// 	{
// 		"id": 0,
// 		"name": "ROLE_USER"
// 	}
// 	],
// 	"username": "string"
// }

// 2. Create a modal or somekind of popup for the inputting of the user object data

const Signup = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [rePassword, setRePassword] = useState("");
  let [age, setAge] = useState(20);
  let [height, setHeight] = useState(154);
  let [physicalActivity, setPhysicalActivity] = useState("LOW");
  let [sex, setSex] = useState("Male");
  let [weight, setWeight] = useState(54);
  let [caloricGoal, setCaloricGoal] = useState(1000);
  let [error, setError] = useState([]);
  let [info, setInfo] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const onSubmitButtonClick = () => {
    if (!(username && password && rePassword)) {
      setError(error.concat(["Incomplete field values."]));
    } else if (password !== rePassword) {
      setError(error.concat(["Password fields do not match."]));
    } else {
      setError([]);
      setInfo(info.concat(["Communicating with the server..."]));
      API.post("users/add", {
        email: email,
        foodDiaries: [],
        id: uuidv4(),
        mealooUserDetails: {
          age: age,
          height: height,
          physicalActivity: physicalActivity,
          sex: sex,
          weight: weight,
        },
        nutritionSettings: {
          dailyCaloricGoal: caloricGoal,
        },
        password: password,
        roles: [
          {
            id: 0,
            name: "ROLE_USER",
          },
        ],
        username: username,
      }).then((response) => {
        response.status === 200
          ? History.push("/login")
          : setError(["There seems to have some problem with your network."]);
      });
    }
  };

  const clearErrorOnFocus = () => {
    setError([]);
  };

  const onCancelButtonClick = () => {
    setUsername("");
    setPassword("");
    setRePassword("");
    setEmail("");
    setError([]);
    setInfo([]);
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleFormSubmit}>
        <FormTitle>Create Account</FormTitle>
        <MainContainer>
          <SectionContainer>
            <FormItem>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                  clearErrorOnFocus();
                }}
                value={username}
              />
            </FormItem>
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearErrorOnFocus();
                }}
                value={email}
              />
            </FormItem>
            <FormItem>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  clearErrorOnFocus();
                }}
                value={password}
              />
            </FormItem>
            <FormItem>
              <Label htmlFor="re-password">Re-type Password</Label>
              <Input
                id="re-password"
                type="password"
                placeholder="Re-type password"
                onChange={(e) => {
                  setRePassword(e.target.value);
                  clearErrorOnFocus();
                }}
                value={rePassword}
              />
            </FormItem>
          </SectionContainer>
          <SectionContainer>
            <FormItem>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </FormItem>
            <FormItem>
              <Label htmlFor="height">Height in cm</Label>
              <Input
                id="height"
                type="number"
                placeholder="Height in centimeter"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
              />
            </FormItem>
            <FormItem>
              <Label htmlFor="select-activity">Physical Activity</Label>
              <select
                name="activityLevel"
                id="select-activity"
                onChange={(e) => setPhysicalActivity(e.target.value)}
                value={physicalActivity}
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </FormItem>
            <FormItem>
              <Label htmlFor="select-sex">Sex</Label>
              <select
                name="sex"
                id="select-sex"
                onChange={(e) => setSex(e.target.value)}
                value={sex}
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </FormItem>
            <FormItem>
              <Label htmlFor="weight">Weight in kg</Label>
              <Input
                id="weight"
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
              />
            </FormItem>
            <FormItem>
              <Label htmlFor="caloricGoal">Daily Caloric Goal</Label>
              <Input
                id="caloricGoal"
                type="number"
                onChange={(e) => setCaloricGoal(e.target.value)}
                value={caloricGoal}
              />
            </FormItem>
          </SectionContainer>
        </MainContainer>
        <ActionContainer>
          <Button primary onClick={onSubmitButtonClick}>
            Create
          </Button>
          <Button onClick={onCancelButtonClick}>Reset</Button>
        </ActionContainer>
        {error.length > 0 ? (
          <ErrorContainer>
            {Array.from(new Set(error)).map((d, i) => (
              <ErrorItem key={i}>{d}</ErrorItem>
            ))}
          </ErrorContainer>
        ) : null}
        {info.length > 0 ? (
          <InfoContainer>
            {Array.from(new Set(info)).map((d, i) => (
              <InfoItem key={i}>{d}</InfoItem>
            ))}
          </InfoContainer>
        ) : null}
        <UtilsContainer>
          <h4>Already have an account?</h4>
          <RedirectLink to="/login" color="red">
            Login.
          </RedirectLink>
        </UtilsContainer>
      </FormContainer>
    </PageContainer>
  );
};

export default Signup;
