from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/profil')
def profil():
    return render_template('profil.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/visi_misi')
def visi_misi():
    return render_template('visi_misi.html')

@app.route('/docs')
def docs():
    return render_template('docs.html')

if __name__ == '__main__':
    app.run(debug=True)