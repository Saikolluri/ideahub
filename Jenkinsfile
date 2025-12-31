pipeline {
  agent any

  stages {
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ideahub .'
      }
    }

    stage('Run Docker Container') {
      steps {
        sh '''
          docker stop ideahub-container || true
          docker rm ideahub-container || true
          docker run -d -p 3000:3000 --name ideahub-container ideahub
        '''
      }
    }
  }
}

