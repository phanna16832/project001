from flask import Flask, request, render_template, redirect

app = Flask(__name__)

# Dummy database (not suitable for production)
users = []

@app.route('/')
def login_page():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    # Here you would typically check the credentials against a database
    # For this example, let's just store them in memory
    users.append({'email': email, 'password': password})
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
