publish: 
	@rm -fr _site
	@spm doc build
	@ghp-import _site
	@git push origin gh-pages
