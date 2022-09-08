import React, { Children } from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface LoginModuleProps {
  title: string
}

//=============================
// Component to be rendered
//=============================
const LoginModule: types.Brick<LoginModuleProps> = ({}) => {
  return (
   <div></div>
  )
}

//=============================
// Brick Schema
//=============================
LoginModule.schema = {
  name: 'login-module',
  label: 'User Login Module',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Hero Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
}

export default LoginModule
