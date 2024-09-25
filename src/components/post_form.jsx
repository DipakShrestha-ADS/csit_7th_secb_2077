import CustomSubmitButton from "./custom-button"
import CustomFormField from "./custom_form_field"

const PostForm = ({onChangeTitle, onChangeBody, onChangeUserId })=>{
    return(
        <div>
            <CustomFormField label="Title" placeholder="Enter your title" type="text" cName="title" onChange={onChangeTitle}/>
            <CustomFormField label="Body" placeholder="Enter your body" type="text" cName="body" onChange={onChangeBody}/>
            <CustomFormField label="User ID" placeholder="Enter your userId" type="number" cName="userId" onChange={onChangeUserId}/>
            <CustomSubmitButton value="Add Post"/>
        </div>
    )
}
export default PostForm