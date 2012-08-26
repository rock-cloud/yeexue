(defproject edu-site "0.0.1"
  :description "the one study website"
  :url "http://www.yeexue.org"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [compojure "1.1.1"]
                 [enlive "1.0.0"]
                 [org.clojure/tools.nrepl "0.2.0-beta9"]
                 [org.clojure/java.jdbc "0.2.3"]
                 [postgresql "9.1-901.jdbc4"]
                 [clojureql "1.0.3"]]
  :plugins [[lein-ring "0.7.3"]]
  :ring {:handler edu-site.handler/app}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.3"]]}})
