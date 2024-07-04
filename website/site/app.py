from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Route for handling GET request from login form
@app.route('/login', methods=['GET'])
def login():
    username = request.args.get('username')
    password = request.args.get('password')

    # Dummy validation (replace with actual logic)
    if username == 'admin' and password == 'password':
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/login_success.html')
def login_success():
    return render_template('login_success.html')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
