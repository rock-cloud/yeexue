(ns edu-site.handler
  (:use compojure.core
        edu-site.views)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]))

(defroutes app-routes
  (GET "/" [] (index-page))
  (GET "/welcome" [] "Hello, world.")
  (GET "/welcome/:name" [name] (hello-world name))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app (handler/site app-routes))
