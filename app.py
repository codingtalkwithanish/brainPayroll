from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def chatbot():
    return render_template('index.html')


@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.json.get("message")

    # Simulated response logic
    if user_message.lower() == "payroll copy":
        response = "You have selected Payroll Copy. Please provide the employee name."
    else:
        response = "I'm sorry, I didn't understand that. Please try again."

    return jsonify({"response": response})


if __name__ == "__main__":
    app.run(debug=True)
