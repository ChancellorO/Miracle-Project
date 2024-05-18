'use client'
import { useSelector } from 'react-redux';

export default function test() {
    const { email, password } = useSelector((state) => state.auth);
    return (
        <div>
            <div>
                {email} {' '}
            </div>
            <div>
                {password}
            </div>
        </div>        
    );
}