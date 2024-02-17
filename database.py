from flask import Flask, request, render_template

app = Flask(__name__)

class UserDatabase:
    def __init__(self):
        self.users = {}

    def add_user(self, username, data):
        if username in self.users:
            print("User already exists!")
        else:
            self.users[username] = data
            print("User added successfully!")

    def authenticate_user(self, email, password):
        for user_data in self.users.values():
            if user_data['email'] == email and user_data['password'] == password:
                return True
        return False

db = UserDatabase()
# Adding users to the database
db.add_user("john_doe", {"email": "john@example.com", "password": "password"})
db.add_user("jane_smith", {"email": "jane@example.com", "password": "password123"})

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if db.authenticate_user(email, password):
            return "Login successful!"
        else:
            return "Invalid email or password. Please try again."
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
