import s from './Profile.module.css';
const Profile = () => {
    return <div className={s.content}>

        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div>
            Ava
        </div>
        <div>
            Mi post
            <div>
                New Post
            </div>
            <div className='posts'>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>

};

export default Profile;