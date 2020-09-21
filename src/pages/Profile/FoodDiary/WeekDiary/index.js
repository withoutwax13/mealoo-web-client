import React from "react";
import { Table } from "semantic-ui-react";

{
  /*
    # WeekDiary
        render:
            - tabulated data chart of diary entries on the current week
            - chart values include:
                    - date
                    - listOfMeals
                    - mealMacronutrients
                    - totalCalories
                    - totalPrice
*/
}

const WeekDiary = () => {
  const WeekDays = [
    {
      name: "Sunday",
      data: {
        totalCalories: 200,
        totalPrice: 200,
        listOfMeals: ["meal1", "meal2", "meal3"],
      },
    },
    {
      name: "Monday",
      data: {
        totalCalories: 200,
        totalPrice: 200,
        listOfMeals: ["meal1", "meal2", "meal3", "meal4"],
      },
    },
    {
      name: "Tuesday",
      data: {
        totalCalories: 200,
        totalPrice: 200,
        listOfMeals: ["meal1", "meal2", "meal3"],
      },
    },
    {
      name: "Wednesday",
      data: {
        totalCalories: 200,
        totalPrice: 200,
        listOfMeals: ["meal1", "meal2", "meal3"],
      },
    },
    {
      name: "Thursday",
      data: {
        totalCalories: 200,
        totalPrice: 200,
        listOfMeals: ["meal1", "meal2", "meal3"],
      },
    },
    {
      name: "Friday",
      data: {
        totalCalories: 200,
        totalPrice: 200,
        listOfMeals: ["meal1", "meal2", "meal3"],
      },
    },
    {
      name: "Saturday",
      data: {
        totalCalories: 200,
        totalPrice: 200,
        listOfMeals: ["meal1", "meal2", "meal3"],
      },
    },
  ];
  return (
    <div>
      <Table color="teal" inverted stackable padded="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            {WeekDays.map((day) => (
              <Table.HeaderCell key={day.name}>{day.name}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Total Calories</Table.Cell>
            {WeekDays.map((day) => (
              <Table.Cell>{day.data.totalCalories}</Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Total Price</Table.Cell>
            {WeekDays.map((day) => (
              <Table.Cell>{day.data.totalPrice}</Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Meals</Table.Cell>
            {WeekDays.map((day) => (
              <Table.Cell>
                <ul>
                  {day.data.listOfMeals.map((meal) => (
                    <li>{meal}</li>
                  ))}
                </ul>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default WeekDiary;
