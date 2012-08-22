(defproject edu-site "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [compojure "1.1.1"]
                 [enlive "1.0.0"]]
  :plugins [[lein-ring "0.7.3"]]
  :ring {:handler edu-site.handler/app}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.3"]]}})
