import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

class User {
    constructor(user) {
        this.name = user.name
        this.gender = user.gender
        this.status = this.getState(this.gender)
    }

    getState(gender) {
        if (gender === 'male') {
            return 'Mr. '
        }else {
            return 'Mrs. '
        }
    }
}

let user = {
    name: 'John Doe',
    gender: 'male'
}

let newUser = new User(user)



function Rooms () {

    function getStatement(item) {
        return `Welcome ${item.status}${item.name}`
    }

    return (
        <Hero hero="roomsHero">
           <Banner title="Our Rooms" subtitle={getStatement(newUser)}>
                <Link to="/" className='btn-primary'>
                    Back To Home
                </Link>
            </Banner> 
        </Hero>
    )
}

export default Rooms