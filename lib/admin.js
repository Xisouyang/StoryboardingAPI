const User = require('../src/models/user')

module.exports = async () => {
  try {
    const user = new User({
      'username': 'admin',
      'password': '1234567',
      'email': 'admin@gmail.com'
    });
    await user.save();
  } catch (err) {
    console.error('Admin user already created!');
  }
}
