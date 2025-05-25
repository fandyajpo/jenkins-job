pipeline {
    agent { label 'docker-agent' }  // Pastikan agent node kamu ada label ini di Jenkins UI

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "Running build on docker-agent node"
                sh 'docker --version'  // contoh akses docker di agent
                sh 'echo Hello from Jenkins Agent!'
            }
        }

        stage('List Of Process') {
            steps {
                echo "See Process"
                sh 'docker ps -a'  // contoh akses docker di agent
                sh 'echo Hello from Jenkins Agent!'
            }
        }

        stage('Test') {
            steps {
                sh 'echo Running tests...'
                // Tambahkan script test kamu di sini
            }
        }
    }
}
