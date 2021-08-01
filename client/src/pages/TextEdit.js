import React, { useMemo, useState } from "react"
import Layout from "../components/Layout"
import { useForm, Controller } from "react-hook-form"
import { Button, Form } from "react-bootstrap"
import JoditEditor from "jodit-react"

function TextEdit({ create, slug }) {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => console.log(data)

  const joditConfig = {
    readonly: false
  }

  return (
    <Layout title={create ? "Create new Text" : "Edit text"}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control {...field} type="text"></Form.Control>
            </Form.Group>
          )}
        />
        <Controller
          name="author"
          control={control}
          defaultValue=""
          render={(field) => (
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control {...field} type="text"></Form.Control>
            </Form.Group>
          )}
        />
        <Controller
          name="slug"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Group className="mb-3">
              <Form.Label>Slug</Form.Label>
              <Form.Control {...field} type="text"></Form.Control>
            </Form.Group>
          )}
        />
        <Controller
          name="rich-text"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Check
                {...field}
                type="switch"
                label="Rich Text"
              ></Form.Check>
            </Form.Group>
          )}
        />
        <Controller
          name="content"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <JoditEditor {...field} config={joditConfig} tabIndex={1} />
          )}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  )
}

export default TextEdit
