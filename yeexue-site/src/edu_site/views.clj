(ns edu-site.views
  (:use net.cgrand.enlive-html)
  (:require [clojure.java.io :as io]))


(deftemplate index-template
  ;; (java.io.StringReader. "<html><title></title><body><h1></h1></body></html>")
  (io/reader (io/resource "public/index.html"))
  [title slogan]
  [:title] (content title)
  [:h1] (content slogan))

(defn index-page []
  (apply str (index-template  "悦学网" "学而时习之，不亦说乎")))

(defn hello-world [name]
  (str "<h1>Hello, " name ".</h1>"))
