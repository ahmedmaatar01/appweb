pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('push image to docker hub') {
            steps { 
                script {
                    withCredentials([usernamePassword(credentialsId: 'appweb', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        
                        sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                        sh "docker tag ahmadsofienimg maatar/ahmadsofienimg"
                        
                        sh "docker push maatar/ahmadsofienimg"
                    }
                }
            }
        }
    }
}
