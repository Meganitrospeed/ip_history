const axios = require('axios');
const { axiosreq, check, authentication } = require('./app'); // adjust the path accordingly

// Assuming you're using Jest, you can use the test function directly

// Assuming you're using a testing library like Jest
/*
test('axiosreq function should make an API call to ipinfo.io', async () => {
    const response = await axiosreq();
    // Check that the response has expected properties
    expect(response).toHaveProperty('ip');
    expect(response).toHaveProperty('city');
    // Add more assertions based on the actual structure of the response
})
*/


test('check function should handle existing and non-existing IPs in the database', async () => {
    const existingIP = '127.0.0.1';
    const nonExistingIP = '192.168.0.1';

    // Test for an existing IP
    await check({ ip: existingIP });
    // ... your test assertions

    // Test for a non-existing IP
    await check({ ip: nonExistingIP });
    // ... your test assertions
});

test('GET /data should return an array of IP data', async () => {
    const response = await axios.get('http://localhost:3001/data');
    // ... your test assertions
});

/*test('authentication function should validate user credentials', async () => {
    const validUser = {
        username: 'testuser',
        password: 'testpassword',
    };

    const invalidUser = {
        username: 'invaliduser',
        password: 'wrongpassword',
    };

    // Test for a valid user
    const resultValid = await authentication(validUser.username, validUser.password);
    expect(resultValid).toBe(true);

    // Test for an invalid user
    const resultInvalid = await authentication(invalidUser.username, invalidUser.password);
    expect(resultInvalid).toBe(false);
});*/
