import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './SignupFormik.css'

export default function SignupFormik({addComments}){
    return(
        <Formik 
        initialValues={{username:'', comment:'', rating:5}} 
        validationSchema={Yup.object({
            username:Yup.string().max(15,'username cannot exceed 15 character').required('Username is required'),
            comment: Yup.string().required('Please fill in some comment'), 
            rating:Yup.number().min(1, 'Rating should be greater than or equal to 1').max(5, 'Rating should be less than or equal to 5').required()
        })}
        onSubmit={(values, {onSubmitting})=>{
            addComments(values)
            resetForm();
        }}>
            <Form>
                <label htmlFor="username">Enter your username</label>
                <Field name='username' type='text'></Field>
                <ErrorMessage name='username'></ErrorMessage>

                <label htmlFor="comment">Enter your remarks</label>
                <Field name='comment' type='text' ></Field>
                <ErrorMessage name='comment'></ErrorMessage>

                <label htmlFor="rating">Give some rating</label>
                <Field name='rating' type='number' ></Field>
                <ErrorMessage name='rating'></ErrorMessage>

                <button type='submit'>Submit</button>

            </Form>
        </Formik>
    )
}