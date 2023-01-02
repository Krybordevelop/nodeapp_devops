pipeline {
    agent nodejs

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
      steps {
        sh 'cd ./myapp'
        sh 'npm install'
        sh 'npm -v'
        sh 'node -v'
      }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}