import PocketBase from 'pocketbase';

// Initialize PocketBase client
const pb = new PocketBase('http://127.0.0.1:8090');

// Function to handle user login
async function login(email, password) {
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        const user = authData.record;
        if (!user.accountVerified) {
            throw new Error('Email not verified. Please verify your email before logging in.');
        }

        console.log('Login successful:', authData);
        return authData;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}

async function register(userData) {
    try {
        const record = await pb.collection('users').create(userData);
        console.log('Registration successful:', record);

        if (!record.accountVerified) {
            await pb.collection('users').requestVerification(userData.email);
            console.log('Verification email sent to:', userData.email);
        }

        return record;
    } catch (error) {
        console.error('Registration failed:', error);
        throw error;
    }
}

// Export the PocketBase client, login, register, sendOtp, and verifyOtp functions
export { pb, login, register };
