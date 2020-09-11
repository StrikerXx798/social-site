import React from "react"
import s from "./ProfileDataForm.module.css";
import {SmallButton} from "../../../common/Buttons/Buttons";
import {createField, Input} from "../../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {required} from "../../../../utils/validators/validators";
import sform from "../../../../common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({profile, handleSubmit, error}) => {
    const contacts = Object.entries(profile.contacts);
    return  <form className={s.containerForm} onSubmit={handleSubmit}>
        {error && <div className={sform.formSummaryError}>{error}</div>}
            <table className={s.table}>
                <tr>
                    <th> Full name:</th>
                    <td>{createField("Full name...", "fullName", [required], Input, s.inputDiv, {className: s.input}, null)}</td>
                </tr>
                <tr>
                    <th>Looking for a job:</th>
                    <td>{createField(null, "lookingForAJob", null, "input", null,
                        {type: "checkbox", className: s.checkbox}, null)}</td>
                </tr>
                <tr>
                    <th>My professional skills:</th>
                    <td>{createField("Skills...", "lookingForAJobDescription", null, Input, s.inputDiv, {className: s.input}, null)}</td>
                </tr>
                <tr>
                    <th>About me:</th>
                    <td> {createField("About me...", "aboutMe", null, Input, s.inputDiv, {className: s.input}, null)}</td>
                </tr>
                <tr >
                    <th colSpan={2} className={s.contacts}>
                        Contacts
                    </th>
                </tr>
                {contacts.map(c =><tr key={c[0]}>
                    <th>
                        {c[0]}
                    </th>
                    <td>
                        {createField(c[0], "contacts."+c[0], null, Input, s.inputDiv, {className: s.input}, null)}
                    </td>
                </tr>)}
                <tr className={s.buttons}>
                    <td>
                        <SmallButton name="save"/>
                    </td>
                    <td>
                        <SmallButton name="cancel"/>
                    </td>
                </tr>
            </table>
        </form>


};

const ProfileDataReduxForm = reduxForm({form: 'profile-data'})(ProfileDataForm);

export default ProfileDataReduxForm;