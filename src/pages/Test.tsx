import React, { ReactNode } from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"

const Test: React.FC = () => {
  function validateName(value) {
    let error
    if (!value) {
      error = "Name is required"
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="name" validate={validateName}>
            {(props): ReactNode => {
              return (
                <FormControl isInvalid={props.form.errors.name && props.form.touched.name}>
                  <FormLabel htmlFor="name">First name</FormLabel>
                  <Input {...props.field} id="name" placeholder="name" />
                  <FormErrorMessage>{props.form.errors.name}</FormErrorMessage>
                </FormControl>
              )
            }}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default Test;