pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout...'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
            }
        }

        stage('Test') {
            steps {
                sh 'docker ps'
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}