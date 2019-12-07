@Library('jenkings') _

pipeline {
  agent {
    label '!docker-qemu'
  }

  environment {
    CI = 'true',
    REACT_APP_OSRM_SERVER_HOST = 'http://osrm:5000/api/osrm/route/v1'
  }

  stages {
    stage('lint') {
      agent {
        docker {
          label 'docker'
          image 'node:12-alpine'
          args '-e HOME=$WORKSPACE'
        }
      }

      steps {
        sh 'npm install'
        sh "node_modules/.bin/eslint 'src/*.{ts,tsx}' 'src/**/*.{ts,tsx}' --max-warnings 0"
        sh 'npm run build'
      }
    }

    stage('docker image') {
      when {
        branch 'master'
      }

      agent {
        label 'docker-qemu'
      }

      stages {
        stage('build') {
          steps {
            script {
              sh "docker image build -t alkesst/biceater-app:${GIT_COMMIT} --pull ."
              sh "docker image tag alkesst/biceater-app:${GIT_COMMIT} alkesst/biceater-app:latest"
            }
          }
        }

        stage('push') {
          steps {
            script {
              docker.withRegistry('', 'alkesst_dockerhub') {
                sh "docker image push alkesst/biceater-app:${GIT_COMMIT}"
                sh "docker image push alkesst/biceater-app:latest"
              }
            }
          }
        }

        stage('refresh env') {
          steps {
            sh 'curl -X POST https://portainer.majorcadevs.com/api/webhooks/a69a4728-dbcc-43e1-b614-31311f818918'
          }
        }
      }
    }
  }
}
