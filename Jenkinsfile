pipeline {
    agent {label 'nodejs'}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
      steps {
        sh 'npm -v'
        sh 'node -v'
        dir('myapp'){
            sh 'npm install'
        }
      }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}