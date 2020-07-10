// Todo: add email, phone and other data as well
class User {
  constructor(id, password, email, name, phone, zipcode, address) {
    this.id = id;
    this.password = password;
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.zipcode = zipcode;
    this.address = address;
  }
}

module.exports = {
  User,
};
