import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './SignupFormik.css'

export default function SignupFormik({addComments}){
    return(
        <div className='form'>
    

            <h1>Comments Form</h1>
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
                    <label htmlFor="username">Enter your username</label><br />
                    <Field name='username' type='text'></Field><br />
                    <ErrorMessage name='username'></ErrorMessage><br />

                    <label htmlFor="comment">Enter your remarks</label><br />
                    <Field name='comment' type='text' ></Field><br />
                    <ErrorMessage name='comment'></ErrorMessage><br />

                    <label htmlFor="rating">Give some rating</label><br />
                    <Field name='rating' type='number' ></Field><br />
                    <ErrorMessage name='rating'></ErrorMessage><br /><br />

                    <button type='submit'>Submit</button><hr /><br />

                </Form>
            </Formik>
        </div>
    )
}