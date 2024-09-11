import './styles/user_card.css'
const UserCard = ({user}) => {
    return (
        <div className='user-card'>
            <div className='user-title'>
                <h1>{user['name']}</h1>
                <p>{user['username']}</p>
            </div>
            <div className='user-info'>
                <UserInfo title="Email" value={user.email} />
                <UserInfo title="Phone" value={user.phone} />
                <UserInfo title="Website" value={user.website} />
            </div>
            <div className='user-address'>
                <UserInfo title="Address" value={user.address.street}/>
            </div>
            <div className='user-company'>
                <UserInfo title="Company" value={user.company.name} />
                <UserInfo title="CatchPhrase" value={user.company.catchPhrase} />
                <UserInfo title="Business" value={user.company.bs} />
            </div>
        </div>
    );
}
export default UserCard

const UserInfo = ({ title, value , extra}) => {
    return (
        <p>
            {!extra && <strong>{title}: </strong>}
            {extra &&  <br/>}
            {value}
        </p>
    );
}